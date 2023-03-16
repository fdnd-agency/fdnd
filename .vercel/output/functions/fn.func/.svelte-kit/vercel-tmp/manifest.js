export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Inter/Inter-Black.ttf","fonts/Inter/Inter-Bold.ttf","fonts/Inter/Inter-ExtraBold.ttf","fonts/Inter/Inter-ExtraLight.ttf","fonts/Inter/Inter-Light.ttf","fonts/Inter/Inter-Medium.ttf","fonts/Inter/Inter-Regular.ttf","fonts/Inter/Inter-SemiBold.ttf","fonts/Inter/Inter-Thin.ttf","fonts/Rubik/Rubik-Black.ttf","fonts/Rubik/Rubik-BlackItalic.ttf","fonts/Rubik/Rubik-Bold.ttf","fonts/Rubik/Rubik-BoldItalic.ttf","fonts/Rubik/Rubik-ExtraBold.ttf","fonts/Rubik/Rubik-ExtraBoldItalic.ttf","fonts/Rubik/Rubik-Italic.ttf","fonts/Rubik/Rubik-Light.ttf","fonts/Rubik/Rubik-LightItalic.ttf","fonts/Rubik/Rubik-Medium.ttf","fonts/Rubik/Rubik-MediumItalic.ttf","fonts/Rubik/Rubik-Regular.ttf","fonts/Rubik/Rubik-SemiBold.ttf","fonts/Rubik/Rubik-SemiBoldItalic.ttf","images/favicon.png","images/hero-bg-fdnd.avif","images/hero-bg-fdnd.jpg","images/hero-bg.jpg","images/layout-3.png","images/layout-4.png","images/profile-icon.jpg","images/react-icon.jpg","images/search-icon.png"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".avif":"image/avif",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.72b478cc.js","imports":["_app/immutable/entry/start.72b478cc.js","_app/immutable/chunks/index.7ec50c75.js","_app/immutable/chunks/singletons.b34d6545.js","_app/immutable/chunks/paths.7e28016d.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.bfc095e2.js","imports":["_app/immutable/entry/app.bfc095e2.js","_app/immutable/chunks/index.7ec50c75.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
