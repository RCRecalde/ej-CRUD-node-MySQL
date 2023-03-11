module.exports = {

list: (req, res) => {
    // getConnection metodo de express-myconnection
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if(err){
                res.json(err)
            }
            //console.log(customers);
            res.render('customer', {
                customers
            })
        })
    })
},
save: (req, res) => {
    const data = req.body
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO customer set ?', [data], (err, customer)  => {
            res.redirect('/')

        })
    })

},
remove: (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/')
        })
    })
},
edit: (req, res) =>{
    const id = req.params.id
req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
        res.render('customer_edit',
           { customer: customer[0]}
        )
    })
})
},
update: (req, res) => {
    const id = req.params.id
const newCustomer = req.body

req.getConnection((err, conn)  => {
    conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) =>{
        res.redirect('/')
    })
})

}

}