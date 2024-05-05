function sprint2(input) {
    const board = {};
    const n = input.shift();
    const assigneesCount = input.slice(0, n);
    for (const assigneeElement of assigneesCount) {
        const [assignee, taskId, title, status, points] = assigneeElement.split(":");
        if (!board.hasOwnProperty(assignee)) {
            board[assignee] = [];
        }
        board[assignee].push({taskId, title, status, points: Number(points)})
    }
    const commands = input.slice(n);

    const commandRunner = {
        "Add New": addNewCommand,
        "Change Status": changeStatus,
        "Remove Task": removeTask,

    }

    function removeTask(assignee, index) {
        if (!board.hasOwnProperty(assignee)) {
            printDontExist(assignee)
            return;
        }
        if (board[assignee].length < 0 || board[assignee].length < index) {
            console.log("Index is out of range!")
            return;
        }
        board[assignee].splice(index, 1);

    }

    function changeStatus(assignee, taskId, newStatus) {
        if (!board.hasOwnProperty(assignee)) {
            printDontExist(assignee);
            return;
        }

        const task = board[assignee].find(t => t.taskId === taskId);
        if (!task) {
            printTaskDontExist(taskId, assignee)
            return;
        }
        task.status = newStatus;
    }

    function addNewCommand(assignee, taskId, title, status, points) {
        if (board.hasOwnProperty(assignee)) {
            board[assignee].push({taskId, title, status, points: Number(points)})
        } else {
            printDontExist(assignee);

        }
    }

    commands.forEach(com => {
        const [commandName, ...rest] = com.split(":");
        commandRunner[commandName](...rest);
    })


    function printDontExist(assigneeName) {
        console.log(`Assignee ${assigneeName} does not exist on the board!`)
    }

    function printTaskDontExist(taskId, assigneeName) {
        console.log(`Task with ID ${taskId} does not exist for ${assigneeName}!`)
    }




}

sprint2([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])

// sprint2(  [
//         '4',
//         'Kiril:BOP-1213:Fix Typo:Done:1',
//         'Peter:BOP-1214:New Products Page:In Progress:2',
//         'Mariya:BOP-1215:Setup Routing:ToDo:8',
//         'Georgi:BOP-1216:Add Business Card:Code Review:3',
//         'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//         'Change Status:Georgi:BOP-1216:Done',
//         'Change Status:Will:BOP-1212:In Progress',
//         'Remove Task:Georgi:3',
//         'Change Status:Mariya:BOP-1215:Done',
//     ]
// )