# AP-31: Kafka Topics API Specification

## Overview

This document defines the Kafka topics and API specifications for FX derivatives integration between Blotter, RMR, and the Digital Banking platform (DKCZ). The specification covers two main topics: Trade data from Blotter and Valuation data from RMR.

## Topic Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     Blotter     │    │   EI Kafka      │    │     DKCZ        │
│  (Trade Data)   │───►│   (Enterprise   │◄──►│   (Consumer)    │
└─────────────────┘    │   Integrator)   │    └─────────────────┘
                       │                 │
┌─────────────────┐    │                 │
│      RMR        │───►│                 │
│ (Valuation Data)│    │                 │
└─────────────────┘    └─────────────────┘
```

## Topic 1: fx-derivatives-trade

### Topic Configuration

```yaml
topic: fx-derivatives-trade
partitions: 3
replication_factor: 3
retention_ms: 604800000  # 7 days
cleanup_policy: compact
compression_type: gzip
```

### Message Schema

#### Message Envelope

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "Unique message identifier"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "Message timestamp in ISO 8601 format"
    },
    "eventType": {
      "type": "string",
      "enum": ["TRADE_CREATED", "TRADE_UPDATED", "TRADE_CANCELLED", "TRADE_SETTLED", "TRADE_LEG_SETTLED"],
      "description": "Type of trade event"
    },
    "source": {
      "type": "string",
      "const": "BLOTTER",
      "description": "Source system identifier"
    },
    "version": {
      "type": "string",
      "const": "1.0",
      "description": "Message schema version"
    },
    "clientId": {
      "type": "string",
      "description": "Client identifier for routing"
    },
    "data": {
      "$ref": "#/definitions/FxTrade"
    }
  },
  "required": ["messageId", "timestamp", "eventType", "source", "version", "clientId", "data"]
}
```

#### FxTrade Schema

```json
{
  "definitions": {
    "FxTrade": {
      "type": "object",
      "properties": {
        "tradeId": {
          "type": "string",
          "maxLength": 50,
          "description": "Unique trade identifier from Blotter"
        },
        "clientId": {
          "type": "string",
          "maxLength": 50,
          "description": "Client identifier"
        },
        "portfolioId": {
          "type": ["string", "null"],
          "maxLength": 50,
          "description": "Portfolio ID (null for BU trades)"
        },
        "tradeType": {
          "type": "string",
          "enum": ["FX_SPOT", "FX_OUTRIGHT", "FX_SWAP"],
          "description": "Type of FX derivative"
        },
        "tradeStatus": {
          "type": "string",
          "enum": ["ACTIVE", "CANCELLED", "SETTLED"],
          "description": "Current trade status"
        },
        "tradeDate": {
          "type": "string",
          "format": "date-time",
          "description": "Trade execution date"
        },
        "businessUnit": {
          "type": "string",
          "enum": ["SU", "BU"],
          "description": "Sales Unit or Business Unit"
        },
        "topasId": {
          "type": ["string", "null"],
          "maxLength": 50,
          "description": "Topas ID for portfolio trades"
        },
        "businessUnitNumber": {
          "type": ["string", "null"],
          "maxLength": 50,
          "description": "BU number for BU trades"
        },
        "legs": {
          "type": "array",
          "items": {"$ref": "#/definitions/FxTradeLeg"},
          "minItems": 1,
          "maxItems": 2,
          "description": "Trade legs"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time",
          "description": "Record creation timestamp"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time",
          "description": "Record update timestamp"
        }
      },
      "required": ["tradeId", "clientId", "tradeType", "tradeStatus", "tradeDate", "businessUnit", "legs", "createdAt", "updatedAt"]
    },
    "FxTradeLeg": {
      "type": "object",
      "properties": {
        "legId": {
          "type": "string",
          "maxLength": 50,
          "description": "Unique leg identifier"
        },
        "legType": {
          "type": "string",
          "enum": ["SPOT", "FORWARD"],
          "description": "Type of leg"
        },
        "legNumber": {
          "type": "integer",
          "minimum": 1,
          "maximum": 2,
          "description": "Leg sequence number"
        },
        "currencyPair": {
          "type": "string",
          "pattern": "^[A-Z]{3}/[A-Z]{3}$",
          "description": "Currency pair in format XXX/YYY"
        },
        "baseCurrency": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "description": "Base currency code"
        },
        "quoteCurrency": {
          "type": "string",
          "pattern": "^[A-Z]{3}$",
          "description": "Quote currency code"
        },
        "operationDirection": {
          "type": "string",
          "enum": ["BUY", "SELL"],
          "description": "Operation direction from bank perspective"
        },
        "fxRate": {
          "type": "number",
          "multipleOf": 0.000001,
          "description": "FX rate with 6 decimal precision"
        },
        "baseAmount": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Amount in base currency"
        },
        "quoteAmount": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Amount in quote currency"
        },
        "tradeDate": {
          "type": "string",
          "format": "date-time",
          "description": "Trade execution date"
        },
        "settlementDate": {
          "type": "string",
          "format": "date-time",
          "description": "Settlement date"
        },
        "settledDate": {
          "type": ["string", "null"],
          "format": "date-time",
          "description": "Actual settlement date"
        },
        "isSettled": {
          "type": "boolean",
          "description": "Settlement status"
        }
      },
      "required": ["legId", "legType", "legNumber", "currencyPair", "baseCurrency", "quoteCurrency", "operationDirection", "fxRate", "baseAmount", "quoteAmount", "tradeDate", "settlementDate", "isSettled"]
    }
  }
}
```

### Sample Messages

#### FX Spot Trade Created

```json
{
  "messageId": "msg_001_20240115_103000",
  "timestamp": "2024-01-15T10:30:00Z",
  "eventType": "TRADE_CREATED",
  "source": "BLOTTER",
  "version": "1.0",
  "clientId": "CLIENT_12345",
  "data": {
    "tradeId": "BLT_FX_20240115_001",
    "clientId": "CLIENT_12345",
    "portfolioId": "PORTFOLIO_67890",
    "tradeType": "FX_SPOT",
    "tradeStatus": "ACTIVE",
    "tradeDate": "2024-01-15T10:30:00Z",
    "businessUnit": "SU",
    "topasId": "TOPAS_12345",
    "businessUnitNumber": null,
    "legs": [
      {
        "legId": "LEG_001",
        "legType": "SPOT",
        "legNumber": 1,
        "currencyPair": "EUR/CZK",
        "baseCurrency": "EUR",
        "quoteCurrency": "CZK",
        "operationDirection": "SELL",
        "fxRate": 25.450000,
        "baseAmount": 100000.00,
        "quoteAmount": 2545000.00,
        "tradeDate": "2024-01-15T10:30:00Z",
        "settlementDate": "2024-01-17T00:00:00Z",
        "settledDate": null,
        "isSettled": false
      }
    ],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

#### FX Swap Trade Created

```json
{
  "messageId": "msg_002_20240115_103000",
  "timestamp": "2024-01-15T10:30:00Z",
  "eventType": "TRADE_CREATED",
  "source": "BLOTTER",
  "version": "1.0",
  "clientId": "CLIENT_12345",
  "data": {
    "tradeId": "BLT_FX_20240115_002",
    "clientId": "CLIENT_12345",
    "portfolioId": "PORTFOLIO_67890",
    "tradeType": "FX_SWAP",
    "tradeStatus": "ACTIVE",
    "tradeDate": "2024-01-15T10:30:00Z",
    "businessUnit": "SU",
    "topasId": "TOPAS_12346",
    "businessUnitNumber": null,
    "legs": [
      {
        "legId": "LEG_002",
        "legType": "SPOT",
        "legNumber": 1,
        "currencyPair": "USD/CZK",
        "baseCurrency": "USD",
        "quoteCurrency": "CZK",
        "operationDirection": "BUY",
        "fxRate": 23.500000,
        "baseAmount": 50000.00,
        "quoteAmount": 1175000.00,
        "tradeDate": "2024-01-15T10:30:00Z",
        "settlementDate": "2024-01-17T00:00:00Z",
        "settledDate": null,
        "isSettled": false
      },
      {
        "legId": "LEG_003",
        "legType": "FORWARD",
        "legNumber": 2,
        "currencyPair": "USD/CZK",
        "baseCurrency": "USD",
        "quoteCurrency": "CZK",
        "operationDirection": "SELL",
        "fxRate": 23.750000,
        "baseAmount": 50000.00,
        "quoteAmount": 1187500.00,
        "tradeDate": "2024-01-15T10:30:00Z",
        "settlementDate": "2024-02-15T00:00:00Z",
        "settledDate": null,
        "isSettled": false
      }
    ],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Topic 2: fx-derivatives-valuation

### Topic Configuration

```yaml
topic: fx-derivatives-valuation
partitions: 3
replication_factor: 3
retention_ms: 2592000000  # 30 days
cleanup_policy: compact
compression_type: gzip
```

### Message Schema

#### Message Envelope

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "Unique message identifier"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "Message timestamp in ISO 8601 format"
    },
    "eventType": {
      "type": "string",
      "enum": ["VALUATION_UPDATED", "VALUATION_CORRECTED"],
      "description": "Type of valuation event"
    },
    "source": {
      "type": "string",
      "enum": ["RMR", "QUAESTOR"],
      "description": "Source system identifier"
    },
    "version": {
      "type": "string",
      "const": "1.0",
      "description": "Message schema version"
    },
    "clientId": {
      "type": "string",
      "description": "Client identifier for routing"
    },
    "data": {
      "$ref": "#/definitions/FxValuation"
    }
  },
  "required": ["messageId", "timestamp", "eventType", "source", "version", "clientId", "data"]
}
```

#### FxValuation Schema

```json
{
  "definitions": {
    "FxValuation": {
      "type": "object",
      "properties": {
        "valuationId": {
          "type": "string",
          "maxLength": 50,
          "description": "Unique valuation identifier"
        },
        "tradeId": {
          "type": "string",
          "maxLength": 50,
          "description": "Reference to FX trade"
        },
        "legId": {
          "type": "string",
          "maxLength": 50,
          "description": "Reference to specific leg"
        },
        "valuationDate": {
          "type": "string",
          "format": "date-time",
          "description": "Valuation calculation date"
        },
        "referenceDate": {
          "type": "string",
          "format": "date-time",
          "description": "Reference date for valuation"
        },
        "currentValue": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Current market value in CZK"
        },
        "tradedValue": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Original traded value in CZK"
        },
        "unrealizedPnL": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Unrealized P&L in CZK"
        },
        "unrealizedPnLPercent": {
          "type": "number",
          "multipleOf": 0.0001,
          "description": "Unrealized P&L percentage"
        },
        "baseCurrencyValue": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Current base currency value"
        },
        "quoteCurrencyValue": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Current quote currency value"
        },
        "baseCurrencyValueCZK": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Base currency value in CZK"
        },
        "quoteCurrencyValueCZK": {
          "type": "number",
          "multipleOf": 0.01,
          "description": "Quote currency value in CZK"
        },
        "marketRate": {
          "type": "number",
          "multipleOf": 0.000001,
          "description": "Current market rate"
        },
        "valuationSource": {
          "type": "string",
          "enum": ["RMR", "QUAESTOR"],
          "description": "Source system for valuation"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time",
          "description": "Record creation timestamp"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time",
          "description": "Record update timestamp"
        }
      },
      "required": ["valuationId", "tradeId", "legId", "valuationDate", "referenceDate", "currentValue", "tradedValue", "unrealizedPnL", "unrealizedPnLPercent", "baseCurrencyValue", "quoteCurrencyValue", "baseCurrencyValueCZK", "quoteCurrencyValueCZK", "marketRate", "valuationSource", "createdAt", "updatedAt"]
    }
  }
}
```

### Sample Messages

#### FX Valuation Update

```json
{
  "messageId": "msg_val_001_20240116_000000",
  "timestamp": "2024-01-16T00:00:00Z",
  "eventType": "VALUATION_UPDATED",
  "source": "RMR",
  "version": "1.0",
  "clientId": "CLIENT_12345",
  "data": {
    "valuationId": "VAL_20240116_001",
    "tradeId": "BLT_FX_20240115_001",
    "legId": "LEG_001",
    "valuationDate": "2024-01-16T00:00:00Z",
    "referenceDate": "2024-01-16T00:00:00Z",
    "currentValue": 2547500.00,
    "tradedValue": 2545000.00,
    "unrealizedPnL": 2500.00,
    "unrealizedPnLPercent": 0.0982,
    "baseCurrencyValue": 100000.00,
    "quoteCurrencyValue": 2547500.00,
    "baseCurrencyValueCZK": 2547500.00,
    "quoteCurrencyValueCZK": 2547500.00,
    "marketRate": 25.475000,
    "valuationSource": "RMR",
    "createdAt": "2024-01-16T00:00:00Z",
    "updatedAt": "2024-01-16T00:00:00Z"
  }
}
```

## Consumer Configuration

### DKCZ Kafka Consumer Configuration

```yaml
consumer:
  group_id: dkcz-fx-derivatives-consumer
  auto_offset_reset: earliest
  enable_auto_commit: false
  max_poll_records: 100
  session_timeout_ms: 30000
  heartbeat_interval_ms: 3000
  max_poll_interval_ms: 300000
  fetch_min_bytes: 1024
  fetch_max_wait_ms: 500
  retry_backoff_ms: 100
  reconnect_backoff_ms: 50
  security_protocol: SASL_SSL
  sasl_mechanism: PLAIN
```

### Consumer Processing Logic

```python
def process_fx_trade_message(message):
    """Process FX trade message from Kafka"""
    try:
        # Validate message schema
        validate_message_schema(message, FX_TRADE_SCHEMA)
        
        # Extract trade data
        trade_data = message['data']
        
        # Process based on event type
        if message['eventType'] == 'TRADE_CREATED':
            create_fx_trade(trade_data)
        elif message['eventType'] == 'TRADE_UPDATED':
            update_fx_trade(trade_data)
        elif message['eventType'] == 'TRADE_CANCELLED':
            cancel_fx_trade(trade_data)
        elif message['eventType'] == 'TRADE_SETTLED':
            settle_fx_trade(trade_data)
        elif message['eventType'] == 'TRADE_LEG_SETTLED':
            settle_fx_trade_leg(trade_data)
            
        # Update portfolio positions
        update_portfolio_positions(trade_data['clientId'], trade_data['portfolioId'])
        
        # Commit message
        commit_message(message)
        
    except Exception as e:
        handle_processing_error(message, e)

def process_fx_valuation_message(message):
    """Process FX valuation message from Kafka"""
    try:
        # Validate message schema
        validate_message_schema(message, FX_VALUATION_SCHEMA)
        
        # Extract valuation data
        valuation_data = message['data']
        
        # Process based on event type
        if message['eventType'] == 'VALUATION_UPDATED':
            update_fx_valuation(valuation_data)
        elif message['eventType'] == 'VALUATION_CORRECTED':
            correct_fx_valuation(valuation_data)
            
        # Update portfolio valuations
        update_portfolio_valuations(valuation_data['tradeId'])
        
        # Commit message
        commit_message(message)
        
    except Exception as e:
        handle_processing_error(message, e)
```

## Error Handling

### Message Processing Errors

```python
def handle_processing_error(message, error):
    """Handle message processing errors"""
    error_details = {
        'message_id': message.get('messageId'),
        'timestamp': message.get('timestamp'),
        'error_type': type(error).__name__,
        'error_message': str(error),
        'retry_count': message.get('retry_count', 0)
    }
    
    # Log error
    logger.error(f"Error processing message: {error_details}")
    
    # Retry logic
    if error_details['retry_count'] < MAX_RETRIES:
        retry_message(message, error_details['retry_count'] + 1)
    else:
        send_to_dead_letter_queue(message, error_details)
```

### Dead Letter Queue

```yaml
dead_letter_queue:
  topic: fx-derivatives-dlq
  partitions: 1
  replication_factor: 3
  retention_ms: 2592000000  # 30 days
```

## Monitoring & Alerting

### Kafka Metrics

```yaml
monitoring:
  consumer_lag_threshold: 1000
  processing_error_rate_threshold: 5%
  message_processing_time_threshold: 1000ms
  
alerts:
  - name: "FX Derivatives Consumer Lag"
    condition: "consumer_lag > 1000"
    severity: "warning"
    
  - name: "FX Derivatives Processing Errors"
    condition: "error_rate > 5%"
    severity: "critical"
    
  - name: "FX Derivatives Topic Unavailable"
    condition: "topic_unavailable"
    severity: "critical"
```

### Health Check Endpoints

```python
@app.route('/health/fx-derivatives')
def fx_derivatives_health():
    """Health check for FX derivatives processing"""
    health_status = {
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat(),
        'kafka_consumer_status': check_kafka_consumer_status(),
        'database_status': check_database_status(),
        'last_processed_message': get_last_processed_message_timestamp(),
        'processing_lag': calculate_processing_lag()
    }
    
    if health_status['processing_lag'] > HEALTH_LAG_THRESHOLD:
        health_status['status'] = 'unhealthy'
        
    return jsonify(health_status)
```

## Security

### Authentication & Authorization

```yaml
security:
  authentication:
    mechanism: SASL_PLAIN
    username: ${KAFKA_USERNAME}
    password: ${KAFKA_PASSWORD}
    
  authorization:
    acl_enabled: true
    permissions:
      - topic: fx-derivatives-trade
        operation: READ
        principal: User:dkcz-fx-consumer
        
      - topic: fx-derivatives-valuation
        operation: READ
        principal: User:dkcz-fx-consumer
```

### Data Encryption

```yaml
encryption:
  in_transit:
    enabled: true
    protocol: TLS 1.2
    
  at_rest:
    enabled: true
    encryption_type: AES-256
    
  message_encryption:
    enabled: false  # Optional additional layer
```

## Testing

### Message Validation Tests

```python
def test_fx_trade_message_schema():
    """Test FX trade message schema validation"""
    valid_message = create_sample_fx_trade_message()
    assert validate_message_schema(valid_message, FX_TRADE_SCHEMA) == True
    
    invalid_message = create_invalid_fx_trade_message()
    assert validate_message_schema(invalid_message, FX_TRADE_SCHEMA) == False

def test_fx_valuation_message_schema():
    """Test FX valuation message schema validation"""
    valid_message = create_sample_fx_valuation_message()
    assert validate_message_schema(valid_message, FX_VALUATION_SCHEMA) == True
    
    invalid_message = create_invalid_fx_valuation_message()
    assert validate_message_schema(invalid_message, FX_VALUATION_SCHEMA) == False
```

### Integration Tests

```python
def test_end_to_end_processing():
    """Test end-to-end message processing"""
    # Send test message to Kafka
    test_message = create_test_fx_trade_message()
    kafka_producer.send('fx-derivatives-trade', test_message)
    
    # Wait for processing
    time.sleep(2)
    
    # Verify data in database
    trade_record = get_fx_trade_from_db(test_message['data']['tradeId'])
    assert trade_record is not None
    assert trade_record.trade_type == test_message['data']['tradeType']
```

## Deployment

### Environment Configuration

```yaml
environments:
  development:
    kafka_brokers: ["dev-kafka-1:9092", "dev-kafka-2:9092"]
    topics:
      fx-derivatives-trade: "dev-fx-derivatives-trade"
      fx-derivatives-valuation: "dev-fx-derivatives-valuation"
      
  staging:
    kafka_brokers: ["staging-kafka-1:9092", "staging-kafka-2:9092"]
    topics:
      fx-derivatives-trade: "staging-fx-derivatives-trade"
      fx-derivatives-valuation: "staging-fx-derivatives-valuation"
      
  production:
    kafka_brokers: ["prod-kafka-1:9092", "prod-kafka-2:9092", "prod-kafka-3:9092"]
    topics:
      fx-derivatives-trade: "fx-derivatives-trade"
      fx-derivatives-valuation: "fx-derivatives-valuation"
```

### Deployment Checklist

- [ ] Kafka topics created with correct configuration
- [ ] Consumer group configured
- [ ] Schema registry updated
- [ ] Database migrations applied
- [ ] Monitoring dashboards configured
- [ ] Alert rules configured
- [ ] Health check endpoints deployed
- [ ] Load testing completed
- [ ] Rollback procedure documented