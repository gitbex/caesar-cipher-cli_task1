
# Usage example:

**Installation:**
<br/><br/>
```git clone https://github.com/gitbex/caesar-cipher-cli_task1.git```  
```cd /caesar-cipher-cli_task1```  
```npm install```  


**1: Cammand can be used in short or in full**

```$ node app.js -a encode -s 7 -i "./plain.txt" -o "./coded.txt"```
<br/><br/>

**2: Provide file path and name for Input and Output**

```$ node app.js --action encode --shift 7 --input plain.txt --output coded.txt```

```$ node app.js --action decode --shift 7 --input coded.txt --output plain.txt```
<br/><br/>

**3: Output or Input or both file can be skipped**

```$ node app.js --action decode --shift 7 --output plain.txt```

```$ node app.js --action decode --shift 7 --input coded.txt```

```$ node app.js --action decode --shift 7```
<br/><br/>

**Exit**  
```Ctrl + c```
