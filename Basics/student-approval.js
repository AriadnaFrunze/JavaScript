//IN: student general grade
//OUT: yes/no

//variable
studentMark = +prompt("your mark") 
studentBudget = +prompt("what is your budget")

//constant
APPROVAL_MARK = 7.0
CONTRACT_COST = 10000

approvedMark = studentMark >= APPROVAL_MARK
approvedBudget = studentBudget >= CONTRACT_COST

approved = approvedMark || approvedBudget 

alert("Is the student approved " + approved)