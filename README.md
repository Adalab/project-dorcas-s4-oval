# Solutions Development Team Metrics (OVAL)

This project aims the development of a web application with the objective of displaying satisfaction and quality indicators. The productivity data is obtained through Trello and the personal satisfaction is measured through a custom Spreadsheet filled by the team.

The data is received accessing different APIs and compiled together on a series of charts aiming to make it easy the decision taking process.

## Current implementation
The current version only displays quality indicators (through Trello API). Satisfaction indicators will be developed on a later version.

# API accesses 
Currently only access to Trello API is implemented on master branch.
To be able to access it, a src/keys/keys.js file containing keys and tokens is needed locally.

In _keys_ folder there is a template of the needed file format.
