# metaphoto

Create pipeline stack pipeline-github.yaml

Manual actions needed:
 - Update external DNS registrar with hosted zone nameservers
    - Create NS records for each of the nameservers returned by the hosted zone
    - This would not be necessary if the root domain were hosted in Route53

- Create the CNAME record necessary to validate the Certificate
