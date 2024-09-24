with open("TUNJUELITO.txt", "r") as f_entrada, open("tunjuelito_geo.txt", "w") as f_salida:
  for linea in f_entrada:
      valores = linea.strip()[1:-2].split(",")
      valores_intercambiados = f"[{float(valores[1])},{float(valores[0])}]"
      f_salida.write(valores_intercambiados + ", \n")