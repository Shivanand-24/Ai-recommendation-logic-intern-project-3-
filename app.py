from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Load recommendations data
def load_recommendations():
    json_path = os.path.join(os.path.dirname(__file__), 'recommendations.json')
    with open(json_path, 'r') as f:
        return json.load(f)

recommendations_data = load_recommendations()

# Calculate recommendation score
def calculate_score(category, experience, learning_style):
    """Calculate a recommendation score based on user preferences"""
    base_score = 75
    
    # Adjust score based on experience level
    if experience == "Beginner":
        base_score += 5
    elif experience == "Intermediate":
        base_score += 10
    elif experience == "Advanced":
        base_score += 15
    
    # Adjust score based on category
    category_bonus = {
        "Technology": 5,
        "Programming": 10,
        "Artificial Intelligence": 15,
        "Data Science": 12,
        "Cyber Security": 10,
        "Web Development": 8,
        "Cloud Computing": 10,
        "Mobile App Development": 8
    }
    base_score += category_bonus.get(category, 5)
    
    # Adjust score based on learning style
    learning_bonus = {
        "Video Courses": 8,
        "Articles": 5,
        "Projects": 12,
        "Certifications": 10
    }
    base_score += learning_bonus.get(learning_style, 5)
    
    # Cap at 100
    return min(base_score, 100)

def get_personalized_message(category, experience, score):
    """Generate personalized message based on preferences"""
    messages = {
        ("Technology", "Beginner"): "Great choice! Start with the fundamentals and build a strong foundation.",
        ("Technology", "Intermediate"): "You're on the right track! Dive deeper into advanced concepts.",
        ("Technology", "Advanced"): "Excellent! Push boundaries and explore cutting-edge technologies.",
        
        ("Programming", "Beginner"): "Welcome to programming! Master the basics before moving forward.",
        ("Programming", "Intermediate"): "You have solid skills! Time to tackle more complex projects.",
        ("Programming", "Advanced"): "You're a coding expert! Explore specialized domains and architectures.",
        
        ("Artificial Intelligence", "Beginner"): "Enter the exciting world of AI! Start with foundational concepts.",
        ("Artificial Intelligence", "Intermediate"): "Build on your knowledge! Deep learning awaits you.",
        ("Artificial Intelligence", "Advanced"): "You're an AI expert! Shape the future with advanced implementations.",
        
        ("Data Science", "Beginner"): "Start your data science journey! Learn to work with data effectively.",
        ("Data Science", "Intermediate"): "Great progress! Analyze complex datasets and draw insights.",
        ("Data Science", "Advanced"): "You're a data expert! Build enterprise-scale analytics solutions.",
        
        ("Cyber Security", "Beginner"): "Protect the digital world! Begin with security fundamentals.",
        ("Cyber Security", "Intermediate"): "Strengthen your security skills! Explore advanced defense techniques.",
        ("Cyber Security", "Advanced"): "You're a security expert! Architect comprehensive security solutions.",
        
        ("Web Development", "Beginner"): "Build amazing websites! Start with HTML, CSS, and JavaScript.",
        ("Web Development", "Intermediate"): "Expand your web skills! Master modern frameworks and tools.",
        ("Web Development", "Advanced"): "You're a web expert! Create scalable, performant applications.",
        
        ("Cloud Computing", "Beginner"): "Welcome to the cloud! Understand cloud fundamentals.",
        ("Cloud Computing", "Intermediate"): "Rise higher! Deploy complex applications in the cloud.",
        ("Cloud Computing", "Advanced"): "You're a cloud architect! Design enterprise cloud solutions.",
        
        ("Mobile App Development", "Beginner"): "Create mobile magic! Start building apps today.",
        ("Mobile App Development", "Intermediate"): "Your app skills are growing! Build sophisticated applications.",
        ("Mobile App Development", "Advanced"): "You're a mobile expert! Create world-class mobile experiences.",
    }
    
    return messages.get((category, experience), "Great choice! Follow your personalized roadmap.")

@app.route('/')
def home():
    """Home page"""
    return render_template('index.html')

@app.route('/recommend')
def recommend():
    """Recommendation form page"""
    categories = list(recommendations_data.keys())
    return render_template('recommendation.html', categories=categories)

@app.route('/result', methods=['POST'])
def result():
    """Display recommendations based on user preferences"""
    try:
        # Get form data
        category = request.form.get('category', '').strip()
        experience = request.form.get('experience', '').strip()
        learning_style = request.form.get('learning_style', '').strip()
        
        # Validate inputs
        if not category or not experience or not learning_style:
            return render_template('recommendation.html', 
                                   error="Please fill all fields",
                                   categories=list(recommendations_data.keys())), 400
        
        if category not in recommendations_data:
            return render_template('recommendation.html',
                                   error="Invalid category selected",
                                   categories=list(recommendations_data.keys())), 400
        
        if experience not in recommendations_data[category]:
            return render_template('recommendation.html',
                                   error="Invalid experience level",
                                   categories=list(recommendations_data.keys())), 400
        
        if learning_style not in recommendations_data[category][experience]:
            return render_template('recommendation.html',
                                   error="Invalid learning style",
                                   categories=list(recommendations_data.keys())), 400
        
        # Get recommendations
        recommendations = recommendations_data[category][experience][learning_style]
        
        # Calculate score and personalized message
        score = calculate_score(category, experience, learning_style)
        personalized_message = get_personalized_message(category, experience, score)
        
        # Create learning roadmap with difficulty levels
        roadmap = []
        difficulty_levels = ["Foundation", "Intermediate", "Advanced", "Expert", "Master"]
        for idx, rec in enumerate(recommendations):
            roadmap.append({
                "topic": rec,
                "level": difficulty_levels[idx % len(difficulty_levels)],
                "position": idx + 1
            })
        
        return render_template('result.html',
                               category=category,
                               experience=experience,
                               learning_style=learning_style,
                               recommendations=recommendations,
                               roadmap=roadmap,
                               score=score,
                               personalized_message=personalized_message)
    
    except Exception as e:
        return render_template('recommendation.html',
                               error=f"An error occurred: {str(e)}",
                               categories=list(recommendations_data.keys())), 500

@app.route('/api/recommendations', methods=['GET'])
def get_recommendations_api():
    """API endpoint to get recommendations data"""
    category = request.args.get('category')
    experience = request.args.get('experience')
    
    try:
        if category and experience:
            if category in recommendations_data and experience in recommendations_data[category]:
                return jsonify({
                    'success': True,
                    'data': recommendations_data[category][experience]
                })
        return jsonify({
            'success': False,
            'error': 'Invalid parameters'
        }), 400
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8000)
