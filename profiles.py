import subprocess

print("Wifi profiles")

perfil_red = input("Nombre de la red: ")

try:
    resultados = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', perfil_red, 'key=clear'],
                                         shell=True).decode('utf-8', errors='backslashreplace')
    
    if "Contenido de la clave" in resultados:
        for line in resultados.split('\n'):
            if "Contenido de la clave" in line:
                password = line.split(':')[1].strip()
                print(f'Contraseña de {perfil_red} : {password}')
                break
    else:
        print(f"No se encontró la red {perfil_red}")
except subprocess.CalledProcessError:
    print("Error al procesar...")