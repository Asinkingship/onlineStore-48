


last_name = "Aguinaga"
age = 137
found = False
name = "adrian"
print(name + last_name)


if age <100:
    print("great you are not that old")
    print("i am inside the if statement")
elif age >100:
    print("yeah seems that you are not that young anymore")
else:
    print("i don't know how you get here")
print("im outside of the if statement")

#functions

def sayHello():
    print("Hello there")

sayHello()

# list .... this is the arrays

colors = ["black", "blue", "red", "yellow"]
# add
colors.append("pink")
# get any element
print(colors[1])

# travel the list - for loop
for col in colors:
    print(col)


print (colors)

# dictionary
me = {
    "firstName": "Adrian",
    "lastName": "Aguinaga",
    "age": 37
}

print(me)
# modify
me["age"]=99
me["age"]=85
# get the values
print(me["firstName"])

# create a calculator using functions


# function
def printMenu():
    print("[1]Sum")
    print("[2]Subtract")
    print("[3]Multiplication")
    print("[4]Division")

# plain instructions
printMenu()
opt = input("Select the option ")

number1=float(input("please give me the first number "))
number2=float(input("please give me the second number "))

if opt=="1":
    total= number1 + number2
    print("the total is: " + str(total))
elif opt=="2":
    total= number1 - number2
    print("the total is: " + str(total))
elif opt=="3":
    total= number1 * number2
    print("the total is: " + str(total))
elif opt=="4":
    if number2 == 0:
        print("you cannot divide by 0")
    else:
        total= number1 / number2
        print("the total is: " + str(total))

