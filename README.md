This is a angular Project.

Steps to run it 
1. npm install
2. ng serve --o

Dependency 
1. ngx-bootstrap
2. bootstrap
3. ngx-quill
4. quill


Objectives completed
1. Search was implemented. Data was inconsistent . Not every giphy which was returned had a "source" , so had to use the "embed_url" with a custome pipe 'safe' in iframe source.
2. ngx-quill was used to create to quill editor and added custome toolbar with predefined buttons. Added one extra custom button'G'.
3. Opened modal when 'G' button in toolbar was clicked with content of first question. Search is working .

Objectives remaining 
1. Option to load more images is not present. (Less time to implement).
2. Not able to add giphy in the editor after it was clicked from modal.(Less time)

Area of improvements
1. Only functional UI (No ui component like loader as of now )
2. Less user friendly as of now.