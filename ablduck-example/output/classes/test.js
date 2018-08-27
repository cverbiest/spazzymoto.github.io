Ext.data.JsonP.test({"files":[],"uses":[],"id":"class-test","tagname":"class","name":"test","extends":"base.class","author":"Robert Edwards  \r\n","comment":"\u003ch1\u003eTest Class file\u003c/h1\u003e\n\u003cp\u003eThis is to test the markdown support\u003c/p\u003e\n\u003cp\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum.\u003c/p\u003e\n\u003cpre\u003e\u003ccode\u003eDEFINE VARIABLE oTest AS test NO-UNDO.\noTest \u003d NEW test().\nMESSAGE oTest:BaseKey.\n\u003c/code\u003e\u003c/pre\u003e\n","icon":"class","superclasses":["base.class","test"],"subclasses":[],"implements":[],"members":[{"id":"constructor-test1","name":"test","owner":"test","tagname":"constructor","comment":"","meta":{"private":true}},{"id":"event-someEvent","name":"someEvent","owner":"test","tagname":"event","comment":"","parameters":[{"name":"sender","datatype":"Progress.Lang.Object","mode":"INPUT"},{"name":"e","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"VOID","comment":""},"meta":{}},{"id":"property-base_class_BaseKey","name":"BaseKey","owner":"base.class","tagname":"property","datatype":"LOGICAL","comment":"\u003cp\u003eBase Key property to store the key\nThis is two paragraphs. \u003cem\u003emarkdown\u003c/em\u003e is also supported here. Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\u003c/p\u003e\n\u003cpre\u003e\u003ccode\u003e/* This is a comment */\nMESSAGE mipEnv:EnvironmentKey.\n\u003c/code\u003e\u003c/pre\u003e\n","meta":{"internal":true}},{"id":"method-base_class_configureEnvironment","name":"configureEnvironment","owner":"base.class","tagname":"method","comment":"\u003cp\u003eConfigure this environment\nThis is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\u003c/p\u003e\n","parameters":[{"name":"iplStart","datatype":"LOGICAL","mode":"INPUT","comment":"Are we at the start of the request.\r\n                 Multiline parameter comment... cool\r\n"},{"name":"ipcTest","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":"Returns true if successful and false if not\r\n"},"meta":{}},{"id":"method-base_class_registerApplicationService","name":"registerApplicationService","owner":"base.class","tagname":"method","comment":"\u003cp\u003eRegister an application \u003cem\u003eService\u003c/em\u003e {@link test}\nThis is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n/* This is a comment */\nIF VALID-OBJECT(oEnv)\nTHEN\noEnv:registerApplicationService().\u003c/p\u003e\n","parameters":[{"name":"ipcServiceCode","datatype":"CHARACTER","mode":"INPUT","comment":"Service code for this application service\r\n                       Multiline *parameter* comment... cool\r\n"},{"name":"ipoObject","datatype":"Progress.Lang.Object","mode":"INPUT","comment":"     The instance object of the service to register\r\n"}],"returns":{"datatype":"LOGICAL","comment":"Returns true if application is **successfully** registered\r\n"},"meta":{"protected":true,"internal":true,"deprecated":{"version":"0.0.1","text":"    Use {@link base.class-method-configureEnvironment configureEnvironment} instead.\r\n"}}}],"meta":{}});