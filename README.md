# Ember OSF Dashboard

This project is for creating a Ember Dashboard on top of [OSF](http://osf.io).  Semantic-UI has been added to the
dependencies and installs with bower.  

## Prerequisites

You will need the following things properly installed on your computer.

*   [Git](http://git-scm.com/)
*   [Node.js](http://nodejs.org/) (with NPM)
*   [Bower](http://bower.io/)
*   [Ember CLI](http://ember-cli.com/)
*   [PhantomJS](http://phantomjs.org/)
*   [ember-osf](http://github.com/centerforopenscience/ember-osf.git)

## Installation and Configuration

*   `git clone https://github.com/crcresearch/ember-osf-dashboard.git develop`
*   `git clone https://github.com/centerforopenscience/ember-osf.git`
*   `cd` into the new app directory
*   `npm install`
*   Use `npm install -g bower` if you haven't installed bower
*   `bower install`
*   Use `npm install -g ember-cli` if you haven't installed ember yet
*   Ember recommends you also install phantomjs with 'npm install -g phantomjs`
*   Read instruction on the ember-osf repository for installation and configuration.
*   `ember install ../ember-osf`
*   `npm link ../ember-osf`
*   Open the config/local.yml file, uncomment the stage section and add your token and client ID.

## Running / Development

*   `BACKEND=stage ember server`
*   Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

*   `ember test`
*   `ember test --server`

### Building

*   `ember build` (development)
*   `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

*   [ember.js](http://emberjs.com/)
*   [ember-cli](http://ember-cli.com/)

Development Browser Extensions:

*   [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
*   [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
