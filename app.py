from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///recipes.db'
db = SQLAlchemy(app)

# Check if tables exist before each request and create them if not
@app.before_request
def before_request():
    if not db.engine.dialect.has_table(db.engine, "recipe"):
        db.create_all()

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    ingredients = db.Column(db.Text, nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    # Add more fields as needed

@app.route('/upload_recipe', methods=['GET', 'POST'])
def upload_recipe():
    if request.method == 'POST':
        title = request.form['title']
        ingredients = request.form['ingredients']
        instructions = request.form['instructions']

        new_recipe = Recipe(title=title, ingredients=ingredients, instructions=instructions)
        db.session.add(new_recipe)
        db.session.commit()

        return redirect(url_for('upload_recipe'))

    return render_template('upload_recipe.html')

if __name__ == '__main__':
    app.run(debug=True)
