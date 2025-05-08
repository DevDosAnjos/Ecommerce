FROM ruby:3.4.1

# Set environment variables
ENV RAILS_ENV=production \
    BUNDLER_VERSION=2.6.2 \
    LANG=C.UTF-8

# Install essential Linux packages
RUN apt-get update -qq && apt-get install -y \
  build-essential \
  libmariadb-dev-compat \
  libmariadb-dev \
  nodejs \
  yarn \
  curl \
  git \
  && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Gemfiles and install gems
COPY Gemfile Gemfile.lock ./
RUN gem install bundler -v "$BUNDLER_VERSION" && bundle install --jobs 4 --without production test

# Copy the rest of the application code
COPY . .

# Precompile assets (optional for API-only apps, can skip if not using frontend)
# RUN bundle exec rake assets:precompile