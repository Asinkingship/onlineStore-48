


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

# modify
me["age"]=99
me["age"]=85
# get the values
print(me["firstName"])

print(me)