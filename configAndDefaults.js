(function(window, undefined) {
	let defaults = {
		options: {
			remove: true,
			enable: false,
			instance: {}
		},
		log: {
			warn: true,
			error: true
		}
	}
	let config = {
		options: {
			remove: false,
			instance: null
		}
	}
	config = (function() {
			// destructure with default value
			let {
				options: {
					remove = defaults.options.remove,
					enable = defaults.options.enable,
					instance = defaults.options.instance
				} = {},
				log: {
					warn = defaults.log.warn,
					error = defaults.log.error
				} = {}
			} = config;
			// restructure
			return {
				options: {
					remove,
					enable,
					instance
				},
				log: {
					warn,
					error
				}
			};
		})()
})()