import csv
import os


###Before you use this



def unpack_csvs(seed_file):
    data = []
    with open(seed_file, mode='r', newline='')as curr_file:
        csvReader = csv.reader(curr_file)
        for row in csvReader:
            data.append(row)
    headers = data.pop(0)

    return headers, data


## all data comes in as strings, therefore we can just do a check for inclusion in a string
def type_conversion(datum):

    numbers = set(['0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9'])
    floats = set(['0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9', '.', '-'])

    if datum == '':
        return datum
    
    elif all([i in numbers for i in datum]):
        return int(datum)
    
    elif all([i in floats for i in datum]) and datum.count('-') <= 1:
        return float(datum)
    else:
        return datum


def clean_headers(header):
    if ":" in header:
        first, second = header.split(":")
        header = [first, second]
    return header.lower()





seed_folder = './seedfolders'
os.chdir(seed_folder)

for seed_file in os.listdir():
    seed_res = {}
    headers, data =unpack_csvs(seed_file)

    for j, row in enumerate(data):
        datum = {}

        for i, col in enumerate(row):
            key = clean_headers(headers[i])
            datum[key] = type_conversion(row[i])
    
        
        seed_res[j] = datum
    title_as_array = seed_file.split('_')
    print(title_as_array[0] +' = ', seed_res, "\n")

# with open(tickerFilePath, mode='w', newline='') as stockDataFile:

#     csvWriter = csv.writer(stockDataFile)
#      csvWriter.writerow([
#     ])