class TabFreeze extends module {
        constructor() {
                super(module);
                this.ModuleName = "Tab Freezer";
                this.ModuleId = "TabFreeze";
                this.category = "misc";
        }
        execute() {
                console.log("clicked")
                while(true) {
                        let f = document.createElement('section');
                        document.body.appendChild(f);
                }
        }
}
