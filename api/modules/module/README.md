
<http://nodejs.org/api/modules.html#modules_module_exports>

Example given in docs fails with error like:


	C:\Users\weibl\git\NTS\org.nodeclipse.examples\api\modules\module\another.js:2
	a.on('ready', function() {
	  ^
	TypeError: Object #<Object> has no method 'on'
	    at Object.<anonymous> (C:\Users\weibl\git\NTS\org.nodeclipse.examples\api\modules\module\another.js:2:3)
	    at Module._compile (module.js:456:26)
	    at Object.Module._extensions..js (module.js:474:10)
	    at Module.load (module.js:356:32)
	    at Function.Module._load (module.js:312:12)
	    at Function.Module.runMain (module.js:497:10)
	    at startup (node.js:119:16)
	    at node.js:903:3
