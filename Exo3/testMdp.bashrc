#!/bin/bash  
  
file='phpbb.txt'  

myString='$1$CACA$XLWo4OqFFCYICqYrZ0y5i/'
echo "hash = $myString"
i=1
while read line; do  
  
#Reading each line
hachage=$(openssl passwd -1 -salt CACA "$line")
if [ $hachage == $myString ]
then 
    echo "MDP trouvé : $line"
fi
i=$((i+1))
if [ $((i%5000)) = 0 ]
then
    echo "i = $i"
fi
done < $file