# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-11-20 07:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CMDB', '0031_auto_20181116_2028'),
    ]

    operations = [
        migrations.AddField(
            model_name='yewutreemptt',
            name='position',
            field=models.SmallIntegerField(blank=True, help_text='\u5c55\u793a\u4f4d\u7f6e\uff0c\u5e76\u5217\u65f6\u4e3a\u4e86\u6b21\u5e8f\u597d\u770b', null=True),
        ),
        migrations.AlterField(
            model_name='host',
            name='tree_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='yewu_host', to='CMDB.YewuTreeMptt', verbose_name='\u4e1a\u52a1\u6811ID'),
        ),
    ]
