# test-workflows
Testing Workflows with CI CD Github Actions.

```mermaid
graph LR;
    subgraph CI
        Build --> Test;
    end
    subgraph CD
        Test --> Deploy;
    end
```