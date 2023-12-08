import subprocess
from ftplib import FTP
import config
import os

## Where the website folder exists (we need this + /public to get the built ) 
CURRENT_WORKING_DIRECTORY = r"C:\\Users\\Danny\\Desktop\\Danny\\Personal Projects\\Personal Website"

if __name__ == '__main__':
    print(" Current working directory for website code: ", CURRENT_WORKING_DIRECTORY)

    try:
        ## build the website
        subprocess.run("npm run build", cwd=CURRENT_WORKING_DIRECTORY, check=True, shell=True)

        ## ftp over the built website
        ftp = FTP(config.ftp_host)
        ftp.set_debuglevel(2)
        ftp.login(user=config.ftp_website_username, passwd=config.ftp_website_password)

        ## change to where website is stored
        ftp.cwd('/public_html')

        build_website_directory = CURRENT_WORKING_DIRECTORY + r'\\public'

        ## put the website in the 
        for file_name in os.listdir(path=build_website_directory):
            filepath = build_website_directory + r'\\' + repr(file_name).strip("'")
            file_obj = open(filepath, 'rb')
            ftp.storbinary("STOR " + file_name, file_obj)
            file_obj.close()

        ftp.quit()
    except subprocess.CalledProcessError as e:
        print('subprocess.CalledProcessError')
        print(e.returncode)
        print(e.output)
    except Exception as e:
        print("BIG ERROR GO BOOM")
        print(e)
        print(type(e))