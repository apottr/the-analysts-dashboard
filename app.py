from flask import Flask,render_template

app = Flask(__name__,static_url_path='')

@app.route('/')
@app.route("/<path:path>")
def index():
    return app.send_static_file("index.html")

@app.route("/bundle")
def bundle():
    return app.send_static_file("dist/bundle")

if __name__ == "__main__":
    app.run()