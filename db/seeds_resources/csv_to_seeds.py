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
def type_conversion(datum, data_type = 'string'):


    if data_type in ['text','string']:
        return str(datum)
    
    elif data_type in ['int', 'integer', 'i']:
        return int(datum)
    
    elif data_type in ['float', 'f']:
        return float(datum)
    else:
        return datum


def clean_headers(header):
    if ":" in header:
        first, second = header.split(":")
        header_and_type = [first.lower(), second]
    else
         header_and_type = [header.lower(), 'string']
    return  header_and_type





seed_folder = './seedfolders'
os.chdir(seed_folder)

for seed_file in os.listdir():
    seed_res = []
    headers, data =unpack_csvs(seed_file)

    for j, row in enumerate(data):
        datum = {}

        for i, col in enumerate(row):
            key = clean_headers(headers[i])
            datum[key[0]] = type_conversion(row[i], key[1])
    
        
        seed_res.append(datum)
    title_as_array = seed_file.split('_')
    print(title_as_array[0] +' = ', seed_res, "\n")

# with open(tickerFilePath, mode='w', newline='') as stockDataFile:

#     csvWriter = csv.writer(stockDataFile)
#      csvWriter.writerow([
#     ])