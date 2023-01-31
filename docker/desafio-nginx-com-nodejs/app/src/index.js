const express = require("express")
const mysql = require("mysql")
const { promisify } = require("util")

const app = express()

app.get("/", async (_, res) => {
	try {
		const connection = mysql.createConnection({
			host: "dominickbrasileiro-database",
			user: "root",
			password: "root",
			database: "nodedb",
		})

		await promisify(connection.connect)

		const promisifyQuery = promisify(connection.query).bind(connection)

		await promisifyQuery("INSERT INTO people(name) VALUES ('Dominick')")

		const rows = await promisifyQuery("SELECT * FROM people")

		res.status(200).send(`<h1>Full Cycle Rocks!</h1>\n<ul>${rows.map(r => `<li>${r.id} - ${r.name}</li>`).join("\n")}</ul>`)

		await promisify(connection.end)
	} catch (err) {
		res.status(500).send(err)
		console.error(err)
	}
})

app.listen(8080, () => console.log("Listening at http://0.0.0.0:8080"))
