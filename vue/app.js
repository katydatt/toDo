
new Vue ({
    el: "#app" ,
    data: {
            showTextArea: false,
            newTask: "",
            taskList: ["read", "run"],
            lists: [{
                name: "Home",
                isActive: false
            },
            {
                name: "Project",
                isActive: false
            },
            {
                name: "Contact",
                isActive: false
            },
            {
                name: "About",
                isActive: false
            }]
    },
    methods: {
        activeLink: function(l) {
            l.isActive = !l.isActive;
        },
    
        addTask: function() {
            var task = this.newTask.trim();

            if(task) {
                this.taskList.push(task);
            }

            this.newTask = "";
        },

        deleteTask: function(task) {
            this.taskList.$remove(task);
        }


    }

});
