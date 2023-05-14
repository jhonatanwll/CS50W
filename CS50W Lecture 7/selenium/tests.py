from selenium import webdriver
import os
import pathlib
import unittest

def file_url(filename):
    return pathlib.Path(os.path.abspath(filename)).as_uri()


driver = webdriver.Chrome()

if __name__ == "__main__":
    unittest.main()