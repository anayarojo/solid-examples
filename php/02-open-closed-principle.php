<?php

// Open Closed Principle Violation

class Programmer
{
    public function code()
    {
        return 'coding';
    }
}

class Tester
{
    public function test()
    {
        return 'testing';
    }
}

class ProjectManagement
{
    public function process($member)
    {
        if ($member instanceof Programmer) {
            $member->code();
        } elseif ($member instanceof Tester) {
            $member->test();
        };

        throw new Exception('Invalid input member');
    }
}

// Refactored

interface IWorkable
{
    public function work();
}

class Programmer implements IWorkable
{
    public function work()
    {
        return 'coding';
    }
}

class Tester implements IWorkable
{
    public function work()
    {
        return 'testing';
    }
}

class ProjectManagement
{
    public function process(IWorkable $member)
    {
        return $member->work();
    }
}
