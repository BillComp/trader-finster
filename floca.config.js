module.exports = {
	floca: {
		appName: 'Trader',
		entityName: 'Finster'
	},
	server: {
		active: false,
		port: 8080
	},
	harcon: {
		bender: {
			enabled: true
		},
		FireBender: {
			defs: require('./bending')
		}
	},
	radiation: {
		rest: {
			harconrpcPath: '/Finster'
		},
		websocket: {
			socketPath: '/Finster'
		}
	}
}
