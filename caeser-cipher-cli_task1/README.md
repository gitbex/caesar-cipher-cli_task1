
Usage example:

1: Cammand can be used in short or in full

$ node app.js -a encode -s 7 -i "./input.txt" -o "./output.txt"


2: Provide file path and name for Input and Output

$ node app.js --action encode --shift 7 --input plain.txt --output encoded.txt

$ node app.js --action decode --shift 7 --input decoded.txt --output plain.txt


3: Output or Input or both file can be skipped

$ node app.js --action decode --shift 7 --output plain.txt

$ node app.js --action decode --shift 7 --input decoded.txt

$ node app.js --action decode
