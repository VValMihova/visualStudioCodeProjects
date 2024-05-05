function sprintState(input) {
    const n = Number(input.shift());
    const tickets = input.slice(0, n);
    const commands = input.slice(n, input.length)

    const board = tickets.reduce((acc, curr) => {
        const [assignee, taskId, title, status, points] = curr.split(":");
        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }
        acc[assignee].push({taskId, title, status, points: Number(points)});
        return acc;
    }, {});


    const commandRunner = {
        "Add New": addNewTask,
        "Change Status": changeStatus,
        "Remove Task": removeTask
    }

    function addNewTask(assignee, taskId, title, status, points) {
        if (!board.hasOwnProperty(assignee)) {
            dontExistPrint(assignee);
            return;
        }
        board[assignee].push({taskId, title, status, points: Number(points)});

    }

    function changeStatus(assignee, taskId, status) {
        if (!board.hasOwnProperty(assignee)) {
            dontExistPrint(assignee);
            return;
        }
        const task = board[assignee].find(t => t.taskId === taskId);
        if (!task) {
            dontExistTask(taskId, assignee);
            return;
        }
        task.status = status;
    }

    function removeTask(assignee, index) {
        if (!board.hasOwnProperty(assignee)) {
            dontExistPrint(assignee);
            return;
        }
        if (board[assignee].length < index || index < 0) {
            noSuchIndexPrint()
            return;
        }

        board[assignee].splice(index, 1);

    }

    commands.forEach(command => {
        const [commandName, ...rest] = command.split(":");
        commandRunner[commandName](...rest);

    })

    function calculateForStatus(statusType) {
        return Object.values(board).reduce((acc, curr) => {
            const boardTotal = curr
                .filter((t) => t.status === statusType)
                .reduce((tasksTotal, task) => tasksTotal + task.points, 0)
            return acc + boardTotal;
        }, 0);
    }

    const toDoPoints = calculateForStatus("ToDo");
    const inProgressPoints = calculateForStatus("In Progress");
    const codeReviewPoints = calculateForStatus("Code Review");
    const donePoints = calculateForStatus("Done");

    function printOutput() {
        console.log(`ToDo: ${toDoPoints}pts`)
        console.log(`In Progress: ${inProgressPoints}pts`)
        console.log(`Code Review: ${codeReviewPoints}pts`)
        console.log(`Done Points: ${donePoints}pts`)
    }

    printOutput();

    function finalPrint() {
        const doneFinal = Number(donePoints);
        const otherFinal = Number(toDoPoints) + Number(inProgressPoints) + Number(codeReviewPoints);

        doneFinal >= otherFinal ? console.log("Sprint was successful!") : console.log("Sprint was unsuccessful...");
    }

    finalPrint();


    function dontExistPrint(assignee) {
        console.log(`Assignee ${assignee} does not exist on the board!`)

    }

    function dontExistTask(id, assignee) {
        console.log(`Task with ID ${id} does not exist for ${assignee}!`)
    }

    function noSuchIndexPrint() {
        console.log("Index is out of range!")
    }

}

// sprintState([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ])

sprintState(  [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
)
