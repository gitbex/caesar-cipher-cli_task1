
# Usage example:

**Installation:**  
```git clone https://github.com/gitbex/caesar-cipher-cli_task1.git```  
```cd /caesar-cipher-cli_task1```  
```npm install```  


**1: Cammand can be used in short or in full**

```$ node app.js -a encode -s 7 -i "./input.txt" -o "./output.txt"```
<br/><br/>

**2: Provide file path and name for Input and Output**

```$ node app.js --action encode --shift 7 --input plain.txt --output encoded.txt```

```$ node app.js --action decode --shift 7 --input decoded.txt --output plain.txt```
<br/><br/>

**3: Output or Input or both file can be skipped**

```$ node app.js --action decode --shift 7 --output plain.txt```

```$ node app.js --action decode --shift 7 --input decoded.txt```

```$ node app.js --action decode --shift 7```  

**Exit**
```Ctrl + c```
