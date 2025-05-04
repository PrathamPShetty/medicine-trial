import random

def generate_report():
    age = random.randint(18, 80)
    bp_sys = random.choice([random.randint(90, 120), random.randint(121, 129), random.randint(130, 139), random.randint(140, 160)])
    bp_dia = random.choice([random.randint(60, 80), random.randint(80, 89), random.randint(90, 100)])
    glucose = random.choice([random.randint(70, 99), random.randint(100, 125), random.randint(126, 200)])
    hr = random.choice([random.randint(60, 100), random.randint(101, 120), random.randint(40, 59)])
    spo2 = random.choice([random.randint(95, 100), random.randint(91, 94), random.randint(80, 90)])
    diseases = ["None", "Hypertension", "Diabetes", "Arrhythmia", "Asthma"]

    # Assign diseases based on vitals
    disease = "None"
    if bp_sys >= 140 or bp_dia >= 90:
        disease = "Hypertension" if random.random() > 0.3 else "None"
    if glucose >= 126:
        disease = "Diabetes" if random.random() > 0.3 else "None"

    # Classify
    healthy = (
        (90 <= bp_sys <= 120) and (60 <= bp_dia <= 80) and
        (70 <= glucose <= 99) and (60 <= hr <= 100) and
        (spo2 >= 95) and (disease == "None") and (age < 60)
    )

    report = f"Patient aged {age} has a BP of {bp_sys}/{bp_dia} mmHg, glucose at {glucose} mg/dL, heart rate of {hr} BPM, and SpO2 at {spo2}%. {'No diseases reported.' if disease == 'None' else f'Diagnosed with {disease}.'}"
    label = "Healthy" if healthy else "Unhealthy"
    return f'"{report}" | {label}'

# Generate 3000 reports
for _ in range(3000):
    print(generate_report())