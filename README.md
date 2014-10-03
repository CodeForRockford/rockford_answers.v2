# rockford_answers.v2

Easier answers to citizens questions  http://answers.rockfordil.gov/


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
