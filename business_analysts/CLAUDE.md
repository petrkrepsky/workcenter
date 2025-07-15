# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the VAC (Virtual Agent Center) platform specification and business analyst work-center materials. The main artifact is `vac_platform.json` which defines the complete architecture for an intelligent agent orchestration platform.

## Architecture Overview

The VAC platform uses a **three-layer architecture**:

### 99th Floor - Supervisor Hub
- **Supervisor Hub**: Administrative console with real-time metrics, Control Record management, and supervisor intervention capabilities
- Primary interface for monitoring platform activity, workload, and agent performance

### 0th Floor - Production (Shop Floor)
- **Work-Center**: Environment where agents process work tasks autonomously or semi-autonomously
- **Inspection Center**: Entry gate that enriches incoming jobs with asset type, functional pattern, and confidence scores
- **Core Services**: Workflow orchestration via "Guided Rails", Control Record management, security gateway, and metrics collection

### -1st Floor - Development (Workshop)
- **Agent Lab**: Development environment for intelligent agents with low-code configuration, tool integration, and one-click deployment
- **Tool Lab**: Library and management of tools (APIs, databases, models) with versioning and secure secrets storage

## Key Concepts

### Control Records
Digital "cards" that travel with every job, containing:
- Job, customer, and source identifiers
- Asset type and functional pattern
- Step history, timestamps, confidence scores
- Links to files in WIP storage

### Guided Rails Orchestration
The workflow engine that moves jobs through the system:
1. **Intake**: Job without Control Record → Inspection Center
2. **Classification**: Add functional pattern and asset type
3. **Routing**: Match to Work-Center or queue as Pending
4. **Processing**: Work-Agent performs operations using tools
5. **Approval**: Auto-pilot, Co-pilot, or Manual mode
6. **Completion**: Control Record closes, result returned

### Functional Patterns
Jobs are classified into functional patterns including:
- **Management**: DIRECT, MANAGE, ADMINISTER, OPERATE, PROCESS
- **Resource Management**: REGISTER, DESIGN, DEVELOP, ASSESS, MAINTAIN
- **Activity Oversight**: TRACK, ANALYSE, MONITOR
- **Resource Assignment**: AGREE TERMS (and others)

## Development Approach

### Guiding Principles
- **Iterative delivery**: Build minimal core first, expand in short cycles
- **Early integration**: Connect all components via Guided Rails in MVP
- **Modularity**: Clear interfaces for easy replacement/extension
- **Limited scope**: MVP contains only must-have features

### Module Integration
Each module is an independent service with clear APIs:
- Security module handles SSO/OIDC, RBAC/ABAC via OPA
- Core Services acts as orchestration hub
- Agent Lab and Tool Lab provide development capabilities
- Administration module manages DevOps, CI/CD, and environments

## Working with this Repository

### Directory Structure
```
work-centers/business_analysts/
├── input/           # Input specifications and requirements
│   └── vac_platform.json  # Complete platform architecture
├── output/          # Generated outputs and deliverables
└── workinprogress/  # Work in progress materials
```

### Key Files
- `vac_platform.json`: Complete VAC platform specification including architecture, modules, business scenarios, and functional patterns

### Business Scenarios
The platform supports three main scenarios documented in the specification:
1. **Configure and View an Agent**: R&D Engineer workflow through Security → Supervisor Hub → Agent Lab
2. **Process a Receipt Conversion Request**: End-to-end job processing through all modules
3. **Supervision and Platform Management**: Administrative oversight and intervention

## Security and Compliance
- End-to-end identity management with SSO/OIDC
- RBAC/ABAC enforced by OPA
- Secrets management in HashiCorp Vault
- GDPR and ISO 27001 compliance
- Central logging to SIEM with anomaly detection

## Agent Development
- Agents have configurable autonomy levels: Auto-pilot, Co-pilot, Manual
- Sandbox testing with synthetic data before production deployment
- Tool integration from Tool Lab with versioning
- Memory configuration and LLM limits management