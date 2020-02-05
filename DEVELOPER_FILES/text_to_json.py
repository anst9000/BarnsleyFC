import os

def checkLineStart(str):
  if(str[0].isdigit()):
    return str
  else:
    str = "--\t" + str
    print(str)
    return str

file_out = open("players.temp.json", "a", encoding="utf8")

for file in os.listdir("teams_temp"):
    if file.endswith(".txty"):
        full_file_name = os.path.join("teams_temp", file)
        file_in = open(full_file_name, "r", encoding="utf8")
        club = file.split('.')[0]
        if ('_' in club):
          club = club.replace('_', ' ')

        club = club.title()

        for line in file_in:
          line = checkLineStart(line)
          line = line.replace('\t', ',')
          shirt, name, pos, age, bday, country = line.split(",")
          print(name, country)
          name = name.lstrip().rstrip()
          pos = pos.lstrip().rstrip()
          age = age.lstrip().rstrip()
          bday = bday.lstrip().rstrip()
          country = country.lstrip().rstrip()
          write_line = ""
          write_line += f"\"team\": \"{club}\","
          write_line += f"\"shirt\": \"{shirt}\","
          write_line += f"\"name\": \"{name}\","
          write_line += f"\"position\": \"{pos}\","
          write_line += f"\"age\": \"{age}\","
          write_line += f"\"birthday\": \"{bday}\","
          write_line += f"\"country\": \"{country}\""
          file_out.write("{")
          file_out.write(write_line)
          file_out.write("},")
