from flask import Flask,render_template

app = Flask(__name__)

@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index_route(path):
    return render_template("index.html")

if __name__ == "__main__":
    app.run()