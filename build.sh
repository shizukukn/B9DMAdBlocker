#!/bin/bash

set -eux

rm B9DMAdBlocker.zip

cd B9DMAdBlocker
zip -r ../B9DMAdBlocker.zip *
