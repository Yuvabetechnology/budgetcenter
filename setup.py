from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in budgetcenter/__init__.py
from budgetcenter import __version__ as version

setup(
	name="budgetcenter",
	version=version,
	description="Budget Center ",
	author="Yuvavbe",
	author_email="tech@yuvabe.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
