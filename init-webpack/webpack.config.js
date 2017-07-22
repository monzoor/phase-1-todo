module.exports = options => {
  	return {
    	entry: './index.js',
    	output: {
      		filename: 'bundle.js',
    	},
    	module: {
    		rules: {
    			test: '/.js$/',
    			exclude: 'node-modules',
    			use: [
    				{
    					loader: 'babel-loader',
    					options: {
    						chacheDirectory: true,
    					}
    				}
    			]
    		}
    	}
  	}
}