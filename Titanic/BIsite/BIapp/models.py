# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class Training(models.Model):
    passengerid = models.IntegerField(db_column='PassengerId', primary_key=True)  # Field name made lowercase.
    survived = models.CharField(db_column='Survived', max_length=1)  # Field name made lowercase.
    pclass = models.CharField(db_column='Pclass', max_length=1, blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=250, blank=True, null=True)  # Field name made lowercase.
    sex = models.CharField(db_column='Sex', max_length=10, blank=True, null=True)  # Field name made lowercase.
    age = models.DecimalField(db_column='Age', max_digits=5, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    sibsp = models.IntegerField(db_column='SibSp', blank=True, null=True)  # Field name made lowercase.
    parch = models.IntegerField(db_column='Parch', blank=True, null=True)  # Field name made lowercase.
    ticket = models.CharField(db_column='Ticket', max_length=50, blank=True, null=True)  # Field name made lowercase.
    fare = models.DecimalField(db_column='Fare', max_digits=10, decimal_places=4, blank=True, null=True)  # Field name made lowercase.
    cabin = models.CharField(db_column='Cabin', max_length=50, blank=True, null=True)  # Field name made lowercase.
    embarked = models.CharField(db_column='Embarked', max_length=1, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        #managed = False
        db_table = 'Training'