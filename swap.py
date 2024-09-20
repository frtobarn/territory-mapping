with open("TUNJUELITO.txt", "r") as f_entrada, open("tunjuelito_geo.txt", "w") as f_salida:
  for linea in f_entrada:
      print("hola")
      valores = linea.strip("[]\n").split(",")
      valores_intercambiados = f"[{valores[1]},{valores[0]}]"
      f_salida.write(valores_intercambiados + "\n")