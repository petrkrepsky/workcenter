# AP-30 SEPA Payment Form Enhancement - Project Plan

## Project Overview
**JIRA Ticket**: AP-30  
**Project**: SEPA Payment Form Enhancement with Dynamic Section and IBAN Enforcement  
**Target Release**: June 2025  
**Target Systems**: DKCZmApp Android, mApp iOS, Backend Services  

## Phase 1: ANALYSE (Completed)
✅ **Input Files Analysis**:
- `input/AP-30_business_idea.md` - Business requirements in Czech
- `input/AP-30_Solution_Design.md` - Technical architecture design

✅ **Key Requirements Identified**:
- Dynamic "Poslat platbu" section (appears only for BBAN format)
- IBAN format enforcement for SEPA payments
- Real-time validation (< 200ms response time)
- Czech/foreign account classification via bank code lookup
- Error messaging in Czech: "Pro SEPA platby zadejte číslo účtu ve formátu IBAN"

✅ **Git Branch Created**: `AP-30-sepa-payment-form-enhancement`

## Phase 2: OBTAIN (Completed)
✅ **BIAN Framework Analysis**:
- 312 service domain files analyzed
- Key patterns identified: PROCESS, ASSESS, OPERATE, TRANSACT, FULFILL, CATALOG
- Relevant domains: Payment Execution, Payment Initiation, Transaction Authorization, Customer Workbench

✅ **Architectural Patterns**:
- **Payment Processing**: Payment_Execution.json, Payment_Initiation.json, Payment_Rail_Operations.json
- **Customer Interaction**: Customer_Workbench.json, Session_Dialogue.json, Interactive_Help.json
- **Transaction Handling**: Transaction_Engine.json, Transaction_Authorization.json

## Phase 3: PLAN (In Progress)

### 3.1 Required Deliverables

#### A. Business Documentation
1. **Business Use Case Document** (✅ EXISTS - Review Required)
   - File: `SEPA_Payment_Form_Enhancement_Business_Use_Case.md`
   - Status: Validate against requirements
   - Content: AS-IS/TO-BE analysis, business process impact, acceptance criteria

#### B. Technical Documentation
2. **Solution Design Document** (✅ EXISTS - Review Required)
   - File: `SEPA_Payment_Form_Enhancement_Solution_Design.md`
   - Status: Validate microservices architecture
   - Content: 7 components, flow diagrams, integration points

#### C. Functional Specifications (❌ TO CREATE)
3. **Payment Form UI Component Functional Specification**
   - File: `SEPA_Payment_Form_UI_Component_Functional_Specification.md`
   - BIAN Pattern: OPERATE (Customer Workbench)
   - Priority Use Cases: Dynamic section display (P1), Real-time validation (P1), Error display (P1)

4. **Form Validation Service Functional Specification**
   - File: `SEPA_Form_Validation_Service_Functional_Specification.md`
   - BIAN Pattern: ASSESS (Transaction Authorization)
   - Priority Use Cases: Account format detection (P1), Validation orchestration (P1)

5. **IBAN Validation Service Functional Specification**
   - File: `SEPA_IBAN_Validation_Service_Functional_Specification.md`
   - BIAN Pattern: ASSESS (Payment Initiation compliance)
   - Priority Use Cases: IBAN format validation (P1), SEPA country detection (P1)

6. **Czech Bank Directory Service Functional Specification**
   - File: `SEPA_Czech_Bank_Directory_Service_Functional_Specification.md`
   - BIAN Pattern: CATALOG (Correspondent Bank Directory)
   - Priority Use Cases: Bank code lookup (P1), Directory sync (P2)

7. **Payment Classification Engine Functional Specification**
   - File: `SEPA_Payment_Classification_Engine_Functional_Specification.md`
   - BIAN Pattern: ASSESS (Payment Rail Operations)
   - Priority Use Cases: SEPA classification (P1), Payment routing (P1)

8. **User Feedback Service Functional Specification**
   - File: `SEPA_User_Feedback_Service_Functional_Specification.md`
   - BIAN Pattern: PROCESS (Interactive Help)
   - Priority Use Cases: Error message generation (P1), User guidance (P2)

9. **Payment Processing Pipeline Functional Specification**
   - File: `SEPA_Payment_Processing_Pipeline_Functional_Specification.md`
   - BIAN Pattern: FULFILL (Payment Execution) + TRANSACT (Payment Initiation)
   - Priority Use Cases: SEPA processing (P1), Foreign processing (P1), Error handling (P2)

#### D. Test Documentation
10. **Test Cases Document** (✅ EXISTS - Review Required)
    - File: `SEPA_Payment_Form_Enhancement_Test_Cases.md`
    - Status: Expand with functional specification test cases
    - Content: Test scenarios for each use case

### 3.2 Functional Specification Template Structure
Each functional specification will follow this structure:

```markdown
## Component: [Component Name]

### Use Case X: [Use Case Title]
- **title**: [Clear summary]
- **pattern**: [BIAN functional pattern]
- **visibility**: [external/internal]
- **description**: As a [user], I can [action] so that [business value]
- **acceptanceCriteria**: [List of verifiable outcomes]
- **assumed**: [true/false]
- **priority**: [P1/P2/P3]
```

### 3.3 BIAN Functional Patterns Mapping
- **ASSESS**: IBAN validation, account format detection, compliance checking
- **PROCESS**: Form validation workflows, error handling, user guidance
- **OPERATE**: Real-time form management, payment rail operations
- **TRANSACT**: Payment initiation, structured payment processing
- **FULFILL**: Payment execution, transaction completion
- **CATALOG**: Bank directory management, reference data

### 3.4 Performance Requirements
- Form validation: < 200ms response time
- Bank code lookup: < 500ms response time
- Payment classification: < 300ms response time
- System availability: 99.9% uptime

### 3.5 Security Requirements
- Account information tokenization for logging
- TLS 1.3 for data in transit
- AES-256 for data at rest
- Rate limiting: 100 requests/minute per user

## Phase 4: DESIGN (Next Steps)
1. Create all 7 functional specification documents
2. Review and validate existing business and solution design documents
3. Expand test cases to cover all functional specifications
4. Store all documents in `/workinprogress` folder
5. Create Git commits for each document

## Phase 5: EVALUATE (Final Steps)
1. Use parallel subagents to validate all BIAN patterns
2. Systematic check for missing use cases
3. Virtual test design validation
4. Final review and corrections
5. Create PR description as readme.md

## Questions for User Clarification
1. Should the existing business use case document be updated or is it sufficient?
2. Are there any specific Czech banking regulations beyond SEPA that need to be considered?
3. Should the solution design include specific integration details with Czech National Bank registry?
4. Are there any additional non-functional requirements (monitoring, logging, etc.)?

## Git Repository Actions Required
- [ ] Create GitHub issue for AP-30 (pending authentication)
- [ ] Commit project plan to `/workinprogress` folder
- [ ] Create individual commits for each deliverable
- [ ] Add plan to Git issue description
- [ ] Create final PR with comprehensive description