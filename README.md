# rockford_answers.v2

Easier answers to question citizens  ~~answers.rockfordil.gov~~ http://rockfordanswers.parseapp.com

## Search endpoint example: http://rockfordanswers.parseapp.com/api/v1/search?question=license&questionCategory=How%20do

## Schema

### questionCategories
+ name (string)

### questions
+ category (relation to questionCategories.name)
+ question (string)
+ answer (string)
+ relatedAnswers (array of question ids that share the same answer)
+ tags (array of tags that are relevant)

### tags
+ tag (string)

### queryLogs
+ query (string)
+ url (string)
+ userAgent (string)
+ ip (string)
