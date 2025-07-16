# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the business analysis and solution design for the SEPA Payment Form Enhancement project (AP-30). The project focuses on improving payment form behavior to properly classify and process SEPA payments by enforcing IBAN format requirements and providing intelligent account format detection.

## Project Structure

### Documentation Files
- **Business Analysis**: `SEPA_Payment_Form_Enhancement_Business_Use_Case.md` - Complete business case with AS-IS/TO-BE analysis
- **Solution Design**: `SEPA_Payment_Form_Enhancement_Solution_Design.md` - Technical architecture and implementation details
- **Functional Specification**: `SEPA_Payment_Form_Enhancement_Functional_Specification.md` - Detailed use cases and functional requirements
- **Test Cases**: `SEPA_Payment_Form_Enhancement_Test_Cases.md` - Test scenarios and validation criteria

### Supporting Materials
- **input/**: Contains original business requirements and solution design documents
- **knowledge/**: BIAN framework reference data and structured domain definitions
- **tasks/**: Task-specific documentation and analysis
- **output/**: Generated outputs and deliverables

## Key Business Requirements

### Core Functionality
1. **Dynamic "Poslat platbu" Section**: Appears only when BBAN format is detected
2. **IBAN Format Enforcement**: SEPA payments must use IBAN format with clear error messaging
3. **Smart Classification**: Automatic Czech vs foreign account detection based on bank codes
4. **Real-time Validation**: Immediate feedback during form completion (< 200ms response time)

### Target Systems
- **DKCZmApp Android**: Mobile banking application
- **mApp iOS**: Mobile banking application
- **Backend Services**: Payment processing, validation, and classification services

## Technical Architecture

### Microservices Components
1. **Payment Form UI Component** (React Native)
2. **Form Validation Service** (Node.js/Express)
3. **IBAN Validation Service** (Java Spring Boot)
4. **Czech Bank Directory Service** (Java Spring Boot)
5. **Payment Classification Engine** (Python/Django)
6. **User Feedback Service** (Node.js/Express)
7. **Payment Processing Pipeline** (Java Spring Boot)

### Key Integration Points
- Czech National Bank registry for bank code lookup
- International banking standards for IBAN validation
- SEPA and SWIFT payment rails
- Real-time form validation with caching (Redis)

## BIAN Framework Context

This project follows BIAN (Banking Industry Architecture Network) standards:
- **Pattern**: Process (form handling), Assess (validation), Fulfill (payment processing)
- **Asset Types**: Financial Transaction, Financial Facility, Bank Facility Operations
- **Service Domains**: Payment Execution, Payment Initiation, Transaction Engine

## Development Guidelines

### Error Handling
- All validation errors must be displayed in Czech language
- Error message format: "Pro SEPA platby zadejte číslo účtu ve formátu IBAN"
- Errors should appear under input fields, not as pop-ups

### Performance Requirements
- Form validation: < 200ms response time
- Bank code lookup: < 500ms response time
- Payment classification: < 300ms response time

### Security Considerations
- All account information must be tokenized for logging
- Use TLS 1.3 for data in transit, AES-256 for data at rest
- Implement rate limiting (100 requests/minute per user)

## Common Development Tasks

This repository contains primarily documentation and analysis files. Common tasks include:

### Documentation Updates
- Update business use cases when requirements change
- Maintain solution design documentation
- Update functional specifications based on implementation feedback

### Analysis Tasks
- Review BIAN framework compliance
- Analyze payment processing flows
- Validate technical architecture decisions

### No Build/Test Commands
This repository contains documentation only - no build, test, or lint commands are applicable.

## Important Notes

- Target release: June 2025
- All documentation is in English except user-facing error messages (Czech)
- Follow BIAN functional patterns for any technical implementation
- Ensure compliance with SEPA regulations and Czech banking standards
