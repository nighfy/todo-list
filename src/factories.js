'use strict';

const listsFactory = (name, todos) => {
    if(todos == undefined) {
        return { name, todos: [] }
    };
    return { name, todos }
};

const todosFactory = (title, description, isCompleted, dueDate, priority, notes, checklist) => {
    if(title === undefined || title === '') { return 'title empty' };
    if(isCompleted === undefined) { isCompleted = false };
    if(description === undefined) { description = '' };
    if(dueDate === undefined) { dueDate = '' };
    if(priority === undefined) { priority = '' };
    if(notes === undefined) { notes = '' };
    if(checklist === undefined) { checklist = [] };
    return { title, description, isCompleted, dueDate, priority, notes, checklist };
};

export { listsFactory, todosFactory };