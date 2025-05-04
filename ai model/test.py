import random
import pandas as pd

def generate_record():
    age = random.randint(18, 90)
    bp_sys = random.randint(90, 180)
    bp_dia = random.randint(60, 110)
    glucose = random.randint(70, 200)
    hr = random.randint(50, 120)
    spo2 = random.randint(85, 100)

    # Diagnosis rules
    if bp_sys > 140 or bp_dia > 90:
        diagnosis = 'Hypertension'
    elif glucose > 140:
        diagnosis = 'Diabetes'
    elif spo2 < 92:
        diagnosis = 'COPD'
    elif hr > 100:
        diagnosis = 'Tachycardia'
    else:
        diagnosis = 'None'

    # Label rules
    label = 'Unhealthy' if diagnosis != 'None' else 'Healthy'

    return {
        "Age": age,
        "BP_Systolic": bp_sys,
        "BP_Diastolic": bp_dia,
        "Glucose": glucose,
        "HR": hr,
        "SpO2": spo2,
        "Diagnosis": diagnosis,
        "Label": label
    }

# Generate 10,000 records
data = [generate_record() for _ in range(10000)]

# Create DataFrame
df = pd.DataFrame(data)

# Save to CSV (optional)
df.to_csv('synthetic_health_data.csv', index=False)

# Preview
print(df.head())
