#Stack used
#    nvm
#    npm
#    POSTCSS Autoprefixer
#    JSPM
#    Babel
#    lodash
#    Grunt
#    Grunt concat
#    Grunt uglify
#    Mocha
#    Mocha cucumber
#    Chai
#    Istanbul
#    Travis


#CI
https://travis-ci.org/oleksii-novakov/tdd-bdd

#Install all dependencies
npm install

#Develop build (build + postcss + watcher)
npm run develop

#Release build (build + postcss + concat + uglify + mochaTest)
npm run release

#TDD and BDD tests + watcher
grunt tests