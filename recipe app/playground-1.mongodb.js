use('craftsoft')

// db.employee.find(
//     {
//         sex:{$exists:true}
//     }
// )

// db.employee.find(
//     {
//         country:{$exists:false}
//     }
// )

// db.employee.find(
//     {
//         sex:{$eq:"Male"}
//     }
// )

db.employee.find(
    {
        salary:{$type:2}
    }
)