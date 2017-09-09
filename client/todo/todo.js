Template.todo.helpers({
    //add you helpers here
    tasks : function(){
        return Tasks.find({})
    }
});

Template.todo.events({
    //add your events here
    'submit #add-task' : function (event) {

        event.preventDefault();

        var content = event.target.content.value;

        Tasks.insert({content : content});
        event.target.content.value = "";
    }
});

Template.todo.onCreated(function () {
    //add your statement here
});

Template.todo.onRendered(function () {
    //add your statement here
});

Template.todo.onDestroyed(function () {
    //add your statement here
});

