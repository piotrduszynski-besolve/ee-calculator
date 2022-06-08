Version number: 5b8d0fd276b6d288905ed2f63a934e057e8feca2

# Product Analyzes
## Business requirements
### Product requirements
- Calculator should be attractive
    - ASCI Art in JSON
    - Web calculator
- Equal Expert Branding
    - Branding in JSON
    - Image
- Feature expected from the simple pocket calculator:
    - sum, subtract, divide, multiplication
    - order of operations execution
    - easy way to input an equation
    - integer and floating
    - 10? chars of precision(is there a limitation for number?)
    - clear input
### Technical Requirements
- coding exercise no more than 90 minutes, code like for the paying client - what compromises I would take
    I've spent some time before starting the coding on analyzes, in the meantime before starting coding exercise. It was hard to find 2h of efficient time to do it. So I had a lot of thoughts before starting. 
    Then did the coding. I decided to split time into 15 minutes sessions maximum. To keep on track of what progress I made and do I need to change a plan o execution.
- Required: Test Coverage, Simplicity, Self-explanatory code
- Include Readme with task version number 
- Include the Version number

### Additional major requirements that I would suggest to the client
- deployment
- product analytics/metrics

## How to deliver business value quickly
- Backend endpoint-based calc as the first stage
- 3rd party calc - https://mathjs.org/ https://nerdamer.com/ , https://www.npmjs.com/package/static-eval
- eval could be used to calc equation from a string, but executing JavaScript from a string can lead to an enormous security risk.
- ASCI Art -> Equal Expert Branding
- Server rendered calc webpage
- express.js as a minimalist framework for the app - easy and quick to use, embedded server rendering

## Risks
- Small amount of time -> 15 minutes coding sessions

## Story Mapping
|**ID**|**Input Equation**            | **Calculate**         | **Display Result**         | **Memorize Equation** | **Clear** |
|------|------------------------------|-----------------------|----------------------------|-----------------------|-----------|
|1     |Endpoint to send equation     | Basic operations(+,-) | Add branding - JSON        |                       |           |
|2     |Validate input string + trim  |                       | Add branding - ASCI art    |                       |           |
|3     |                              | Basic operations(*,/) |                            |                       |           |
|3.1   |                              |   Order of operations |                            |                       |           |
|3.2   |                              |   Divide by 0         |                            |                       |           |
|4     |                              |                       | HTML page + branding image |                       |           |
|5     |Home page with equation input |                       |                            |                       |           |

## Technology stack

### CI
Simple and quick to build, helps with test coverage, code like for the paying client:
- eslint
- husky
- jest
- supertest
- Create app artifacts using Github Releases
- If MVP is created, think about adding Github action for CI
- If MVP is created, think about the creation of an artifact as a Docker image in GitHub Container Registry
### CD
Simple and quick to deploy:
- Manual releases to AWS Lightsail
- If MVP is created, add deployment via AWS Pipeline
- If MVP is created, add IaC
### App
Simple and quick to build:
- express
- template engine - ejs
## Product Monitoring
 - If MVP is created, add Mixpanel
 
# Session Notes
